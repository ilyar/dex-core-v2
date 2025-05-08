# STON.fi Decentralized Exchange V2
[![TON](https://img.shields.io/badge/based%20on-TON-blue)](https://ton.org/)
[![License](https://img.shields.io/badge/license-GPL--3.0-brightgreen)](https://opensource.org/licenses/GPL-3.0)

Core contracts for the STON.fi DEX protocol V2.

## 👨🏻‍🔬 Collect metric

**Build `@ton-sandbox-bech` and `@ton-blueprint-bech`:**

```bash
git clone --branch=feature/betch git@github.com:ton-org/sandbox.git sandbox-bench
cd sandbox-bench
yarn && yarn build && yarn pack --out dist/%s-bech.tgz && cd ..

git clone --branch=feature/betch git@github.com:ton-org/blueprint.git blueprint-bench
cd blueprint-bench
yarn && yarn build && yarn pack --out dist/%s-bech.tgz && cd ..

git clone git@github.com:ston-fi/dex-core-v2.git
cd dex-core-v2
pnpm add -D ../sandbox-bench/dist/@ton-sandbox-bech.tgz ../blueprint-bench/dist/@ton-blueprint-bech.tgz
```

**Setup: [gas-report.config.js](gas-report.config.js)**
**Run tests and collect metric:**

```bash
pnpm build
npx func-js -v
npx blueprint snapshot --label "func v0.4.4" -- --config gas-report.config.js
```

**Get report:**

```bash
pnpm add -D @ston-fi/funcbox @ton-community/func-js
npx func-js -v
pnpm build
pnpm gas-report 
pnpm snapshot
```

🧙🏻‍♂️ See result:
- [.snapshot](.snapshot)
- [gas-report.json](gas-report.json)
- [contract.abi.json](contract.abi.json)

## Licensing
The license for STON.fi Decentralized Exchange is the GNU General Public License v3.0 (GPL-3.0), see [LICENSE](LICENSE).
