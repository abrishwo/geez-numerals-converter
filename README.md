---

# Geez Numerals Converter

![![npm](https://img.shields.io/npm/v/geez-numerals-converter)](https://www.npmjs.com/package/geez-numerals-converter)
![![license](https://img.shields.io/npm/l/geez-numerals-converter)](https://github.com/yourusername/geez-numerals-converter/blob/main/LICENSE)
![![issues](https://img.shields.io/github/issues/yourusername/geez-numerals-converter)](https://github.com/yourusername/geez-numerals-converter/issues)


Geez Numerals Converter is a powerful JavaScript library designed to seamlessly convert numbers between English/Arabic numerals and Ge'ez numerals. Perfect for developers working on projects involving Ethiopian scripts, historical numerical systems, or multilingual support, this package ensures accurate and efficient conversions.

## Features

- **Bidirectional Conversion**: Convert numbers from English/Arabic to Ge'ez numerals and vice versa.
- **High Accuracy**: Maintains numerical integrity during conversions.
- **Lightweight and Fast**: Optimized for performance in both client-side and server-side applications.
- **Easy Integration**: Simple API for quick implementation in JavaScript or TypeScript projects.
- **Open Source**: Encourages community contributions and collaboration.

## Installation

Install the package using npm:

```bash
npm install geez-numerals-converter
```

Or with yarn:

```bash
yarn add geez-numerals-converter
```

## Usage

### Import the Library

```javascript
const geezConverter = require('geez-numerals-converter');
```

### Convert Integer to Ge'ez Numerals

```javascript
const geezNumber = geezConverter.intToGeez(4);
console.log(geezNumber); // Output: ፬
```

### Convert Ge'ez Numerals to Integer

```javascript
const integer = geezConverter.geezToInt('፫፻፲፬');
console.log(integer); // Output: 314
```

## API

### `intToGeez(num)`

Converts an integer to its Ge'ez numeral representation.

- **Parameters**: `num` (Number) - The integer to convert.
- **Returns**: (String) - The Ge'ez numeral representation of the number.

### `geezToInt(geezNum)`

Converts a Ge'ez numeral string to its integer representation.

- **Parameters**: `geezNum` (String) - The Ge'ez numeral string to convert.
- **Returns**: (Number) - The integer representation of the Ge'ez numerals.

## Contributing

We welcome contributions from the community. If you find a bug or have a feature request, please open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to all contributors and the open-source community for their invaluable support and contributions.

---
