// include file system module

const fs = require('fs');
const path = require('path');

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const components = [
  // 'avatar',
  // 'badge',
  // 'button',
  // 'link',
  // 'telicon',
  // 'toast',
  // 'toasttrigger',
  'checkbox',
  'checkboxgroup',
  'label',
  'password',
  'radio',
  'radiogroup',
  'search',
  'textinput',
  'textarea',
];

function execute (j) {
  const compName =
    j === 'toasttrigger'
      ? 'ToastTrigger'
      : j === 'checkboxgroup'
        ? 'CheckboxGroup'
        : j === 'radiogroup'
          ? 'RadioGroup'
          : capitalizeFirstLetter(j);

  const content = `import * as React from 'react';
  import { View, Text } from 'react-native';
  
  export interface ${compName}Props {}
  
  export function ${compName}(props: ${compName}Props) {
    return (
      <View>
        <Text>${compName}</Text>
      </View>
    );
  }
  `;
  fs.mkdirSync(path.join(__dirname, j));

  fs.writeFileSync(`./${j}/index.tsx`, content);
  fs.writeFileSync(`./${j}/types.ts`, `export interface ${compName}Props {}`);
  fs.writeFileSync(`./${j}/${j}.module.scss`, `.${j} {}`);
  fs.writeFileSync(
    `./${j}/${j}.module.scss.d.ts`,
    `interface StyleGenericValue {
    [key: string]: string | number;
  }
  
  export interface I_${compName}Scss {
    button: StyleGenericValue;
  }
  
  export const styles: I_${compName}Scss;
  
  export default styles;
  `
  );
}

for (let j = 0; j < components.length; j++) {
  execute(components[j]);
  console.log(components[j]);
}
