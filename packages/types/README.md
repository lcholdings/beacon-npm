<p align="center">
  <br />
  <h1 align="center">@beacon-oss/types</h1>
</p>

<div align="center">

[Changelog](https://github.com/lcholdings/beacon-npm/blob/main/packages/types/CHANGELOG.md)
·
[Request a Feature](https://github.com/lcholdings/beacon-npm/issues/new?assignees=lazylllama&labels=feature+request&title=Feature+Request+Types:+&type=feature)
·
[Get help](https://github.com/lcholdings/beacon-npm/issues)

</div>

---

## Getting Started

This package provides the TypeScript type declarations for Beacon's different projects/repositories. This is what we use internally to ensure type safety across our codebase, and it can be useful for you too if you want to integrate with our API or use our SDKs.

> [!NOTE]
> Our API is made in Rust so there will be differences in the types for it, this package provides a good starting point for you to use in your TypeScript projects but don't expect it to be a 1:1 match with the API types.

### Installation

```sh
npm install @beacon-oss/types --save-dev
```

## Usage

Import types from `@beacon-oss/types` like so:

```ts
import type { PlayerIdentifiers } from '@beacon-oss/types';

export type PlayerData = {
  identifiers: PlayerIdentifiers;
  name: string;
  job: string;
  money: number;
};
```
## Support

You can get in touch with us in any of the following ways:

- Send us an email at [me@lazyllama.xyz](mailto:me@lazyllama.xyz)
- Message either `lazyllamaa` or `cyberdev.tech` on Discord

## Security

`@beacon-oss/types` follows good practices of security, but 100% security cannot be assured.

`@beacon-oss/types` is provided **"as is"** without any **warranty**. Use at your own risk.

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/lcholdings/beacon-npm/blob/main/packages/types/LICENSE) for more information.

## Thanks

Thanks to [Clerk](https://clerk.com) for their types package which inspired me to actually make a types package. Also kind of used their code as a reference for how to structure this package aswell as copy the readme stright from their type package.