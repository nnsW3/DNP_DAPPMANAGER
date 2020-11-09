import os from "os";
import shellParse from "shell-quote";
import shellExec from "../utils/shell";
import osu from "node-os-utils";
import { HostStatCpu, HostStatDisk, HostStatMemory } from "../types";
import { logs } from "../logs";

// Cache static values
const numCores = os.cpus().length;
/**
 * Returns the cpu use percentage in string
 */
export async function getCPUStats(): Promise<HostStatCpu> {
  const cpuPercentage = await osu.cpu.usage(5000); // 10.38
  return { used: (Math.round(cpuPercentage) + "%").toString() };
}
/**
 * Returns the memory statistics (use, free, shared, etc)
 */
export async function getMemoryStats(): Promise<HostStatMemory> {
  const mem = await shellExec(`free / --bytes`); // bytes format
  return parseMemoryStats(mem);
}
/**
 * Returns the disk statistics (used, available, etc)
 */
export async function getDiskStats(): Promise<HostStatDisk> {
  const disk = await shellExec(`df / --block-size=1`); // bytes format
  return parseDiskStats(disk);
}

// Utils

/**
 * Uses nodejs native os.loadavg, which returns three factors
 * [0.124352, 0.16262, 0.32514]
 * [1 min, 5 min, 15 min] averages
 * This util takes only the 1min and limits it to 100%
 * @returns cpu usage percent "36%"
 */
function getCpuLoad(): string {
  let cpuFraction = os.loadavg()[0] / numCores;
  if (cpuFraction > 1) cpuFraction = 1;
  return Math.round(cpuFraction * 100) + "%";
}

/**
 * Wraps the shell calls to return null in case of error
 * @param fn async getter
 * @param name for the message
 */
async function wrapErrors<R>(
  fn: () => Promise<R>,
  name: string
): Promise<R | undefined> {
  try {
    return await fn();
  } catch (e) {
    logs.warn(`Error fetching ${name}`, e);
  }
}

/**
 * Parses the 'df /' bash output command
 * @param disk string with disk usage info
 */
function parseDiskStats(disk: string): HostStatDisk {
  const parsedDisk = shellParse.parse(disk);
  return {
    filesystem: parsedDisk[7].toString(),
    kblocks: parsedDisk[8].toString(),
    used: parsedDisk[9].toString(),
    available: parsedDisk[10].toString(),
    usepercentage: parsedDisk[11].toString() + "%",
    mountedon: parsedDisk[12].toString()
  };
}

/**
 * Parses the 'free /' bash output command
 * @param mem string with memory usage info
 */
function parseMemoryStats(mem: string): HostStatMemory {
  const parsedMemory = shellParse.parse(mem);
  return {
    memTotal: parsedMemory[7].toString(),
    memUsed: parsedMemory[8].toString(),
    free: parsedMemory[9].toString(),
    shared: parsedMemory[10].toString(),
    buffCache: parsedMemory[11].toString(),
    available: parsedMemory[12].toString(),
    usepercentage: (
      (parseInt(parsedMemory[15].toString()) /
        parseInt(parsedMemory[7].toString())) *
      100
    ).toString()
  };
}
