import { Network, Routes } from "common";

export const stakerConfig: Pick<
  Routes,
  "stakerConfigGet" | "stakerConfigSet"
> = {
  stakerConfigSet: async () => {},
  stakerConfigGet: async (network: Network) => {
    switch (network) {
      case "mainnet":
        return {
          executionClients: [
            {
              status: "ok",
              dnpName: "geth.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "geth.dnp.dappnode.eth",
                description: "Go implementation of ethereum. Execution client",
                shortDescription: "Go implementation of ethereum",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nethermind.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nethermind.dnp.dappnode.eth",
                description: "Nethermind execution client",
                shortDescription: "Nethermind execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "besu.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "besu.dnp.dappnode.eth",
                description: "Besu execution client",
                shortDescription: "Besu execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "erigon.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "erigon.dnp.dappnode.eth",
                description: "Erigon execution client",
                shortDescription: "Erigon execution client",
                version: "0.1.0"
              }
            }
          ],
          consensusClients: [
            {
              status: "ok",
              dnpName: "prysm.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "prysm.dnp.dappnode.eth",
                description: "Prysm consensus client",
                shortDescription: "Prysm consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-mainnet",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            },
            {
              status: "ok",
              dnpName: "lighthouse.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "lighthouse.dnp.dappnode.eth",
                description: "Lighthouse consensus client",
                shortDescription: "Lighthouse consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "teku.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "teku.dnp.dappnode.eth",
                description: "Teku consensus client",
                shortDescription: "Teku consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nimbus.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nimbus.dnp.dappnode.eth",
                description: "Nimbus consensus client",
                shortDescription: "Nimbus consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-nimbus",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            }
          ],
          web3Signer: {
            status: "ok",
            dnpName: "web3signer.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: true,
            avatarUrl: "",
            metadata: {
              name: "web3signer.dnp.dappnode.eth",
              description: "Web3Signer",
              shortDescription: "Web3Signer",
              version: "0.1.0"
            }
          },
          mevBoost: {
            status: "ok",
            dnpName: "mevboost.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: true,
            avatarUrl: "",
            metadata: {
              name: "mevboost.dnp.dappnode.eth",
              description: "MEV Boost",
              shortDescription: "MEV Boost",
              version: "0.1.0"
            }
          }
        };
      case "prater":
        return {
          executionClients: [
            {
              status: "ok",
              dnpName: "geth.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "geth.dnp.dappnode.eth",
                description: "Geth execution client",
                shortDescription: "Geth execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nethermind.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nethermind.dnp.dappnode.eth",
                description: "Nethermind execution client",
                shortDescription: "Nethermind execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "besu.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: false,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "besu.dnp.dappnode.eth",
                description: "Besu execution client",
                shortDescription: "Besu execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "erigon.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "erigon.dnp.dappnode.eth",
                description: "Erigon execution client",
                shortDescription: "Erigon execution client",
                version: "0.1.0"
              }
            }
          ],
          consensusClients: [
            {
              status: "ok",
              dnpName: "prysm.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "prysm.dnp.dappnode.eth",
                description: "Prysm consensus client",
                shortDescription: "Prysm consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-mainnet",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            },
            {
              status: "ok",
              dnpName: "lighthouse.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "lighthouse.dnp.dappnode.eth",
                description: "Lighthouse consensus client",
                shortDescription: "Lighthouse consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "teku.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "teku.dnp.dappnode.eth",
                description: "Teku consensus client",
                shortDescription: "Teku consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nimbus.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nimbus.dnp.dappnode.eth",
                description: "Nimbus consensus client",
                shortDescription: "Nimbus consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-nimbus",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            }
          ],
          web3Signer: {
            status: "ok",
            dnpName: "web3signer.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: false,
            avatarUrl: "",
            metadata: {
              name: "web3signer.dnp.dappnode.eth",
              description: "Web3Signer",
              shortDescription: "Web3Signer",
              version: "0.1.0"
            }
          },
          mevBoost: {
            status: "ok",
            dnpName: "mevboost.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: false,
            avatarUrl: "",
            metadata: {
              name: "mevboost.dnp.dappnode.eth",
              description: "MEV Boost",
              shortDescription: "MEV Boost",
              version: "0.1.0"
            }
          }
        };

      case "gnosis":
        return {
          executionClients: [
            {
              status: "ok",
              dnpName: "geth.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "geth.dnp.dappnode.eth",
                description: "Geth execution client",
                shortDescription: "Geth execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nethermind.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nethermind.dnp.dappnode.eth",
                description: "Nethermind execution client",
                shortDescription: "Nethermind execution client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "besu.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "besu.dnp.dappnode.eth",
                description: "Besu execution client",
                shortDescription: "Besu execution client",
                version: "0.1.0"
              }
            },

            {
              status: "ok",
              dnpName: "erigon.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "erigon.dnp.dappnode.eth",
                description: "Erigon execution client",
                shortDescription: "Erigon execution client",
                version: "0.1.0"
              }
            }
          ],
          consensusClients: [
            {
              status: "ok",
              dnpName: "prysm.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: true,
              avatarUrl: "",
              metadata: {
                name: "prysm.dnp.dappnode.eth",
                description: "Prysm consensus client",
                shortDescription: "Prysm consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-mainnet",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            },
            {
              status: "ok",
              dnpName: "lighthouse.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "lighthouse.dnp.dappnode.eth",
                description: "Lighthouse consensus client",
                shortDescription: "Lighthouse consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "teku.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "teku.dnp.dappnode.eth",
                description: "Teku consensus client",
                shortDescription: "Teku consensus client",
                version: "0.1.0"
              }
            },
            {
              status: "ok",
              dnpName: "nimbus.dnp.dappnode.eth",
              isInstalled: true,
              isRunning: true,
              isUpdated: true,
              isSelected: false,
              avatarUrl: "",
              metadata: {
                name: "nimbus.dnp.dappnode.eth",
                description: "Nimbus consensus client",
                shortDescription: "Nimbus consensus client",
                version: "0.1.0"
              },
              graffiti: "Validating_from_prysm-nimbus",
              feeRecipient: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
              checkpointSync: "https://checkpoint-sync.dappnode.io/"
            }
          ],
          web3Signer: {
            status: "ok",
            dnpName: "web3signer.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: true,
            avatarUrl: "",
            metadata: {
              name: "web3signer.dnp.dappnode.eth",
              description: "Web3Signer",
              shortDescription: "Web3Signer",
              version: "0.1.0"
            }
          },
          mevBoost: {
            status: "ok",
            dnpName: "mevboost.dnp.dappnode.eth",
            isInstalled: true,
            isRunning: true,
            isUpdated: true,
            isSelected: true,
            avatarUrl: "",
            metadata: {
              name: "mevboost.dnp.dappnode.eth",
              description: "MEV Boost",
              shortDescription: "MEV Boost",
              version: "0.1.0"
            }
          }
        };
    }
  }
};