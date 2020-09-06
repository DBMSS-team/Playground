# **ESLint** - Static Code Checks

Program may not be bug-less, but if it is consistent and pretty, it would be easier to debug and maintain it. These tools are only meant to reduce chance for potential problems to arise.

At the end of the day, we are the one in charge to make sure your code is easy to read

## Setup ESLint in your project

1. Add this package to your devDependencies

  ```sh
  npm i -D eslint
  ```

2. In the root directory of your project (next to your `package.json`) create the file `.eslintrc` with the content as follows:

```json
{
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 8
	},
	"rules": {
		// Reference
		//  "off" or 0 - turn the rule off
		//  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
		//  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
		"array-bracket-spacing": [
			1,
			"never"
		],
		"block-scoped-var": 2,
		"brace-style": [
			2,
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"camelcase": 2,
		"computed-property-spacing": [
			2,
			"never"
		],
		"comma-spacing": [
			1,
			{
				"before": false,
				"after": true
			}
		],
		"comma-style": [
			1,
			"last"
		],
		"eol-last": 1,
		"eqeqeq": [
			2,
			"smart"
		],
		"max-depth": [
			1,
			3
		],
		"max-statements": [
			1,
			15
		],
		"new-cap": 1,
		"no-extend-native": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-trailing-spaces": 2,
		"no-var": 2,
		"no-unused-vars": 1,
		"no-use-before-define": [
			2,
			"nofunc"
		],
		"object-curly-spacing": [
			2,
			"always"
		],
		"quotes": [
			2,
			"double",
			{
				"allowTemplateLiterals": true
			}
		],
		"quote-props": [
			1,
			"as-needed",
			{
				"keywords": true
			}
		],
		"semi-style": [
			2,
			"last"
		],
		"keyword-spacing": [
			2,
			{
				"before": true,
				"after": true
			}
		],
		"space-unary-ops": 2,
		"indent": [
			2,
			"tab"
		],
		"no-else-return": 2,
		"max-len": [
			1,
			{
				"code": 100,
				"tabWidth": 4,
				"comments": 100,
				"ignoreUrls": true,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true
			}
		],
		"strict": [
			2,
			"global"
		],
		"max-lines": [
			2,
			{
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		]
	}
}
```

3. Add the following `lint` command in your `package.json` > `scripts` section:

  ```diff
  "scripts": {
      ...
  +    "lint": "eslint -f stylish --ignore-path .gitignore .",
      ...
  }
  ```

4. To check your code run

  ```sh
  npm run lint
  ```

5. To fix automatically all fixable issues, run:

  ```sh
  npm run lint -- --fix
  ```

## Visual Studio Code

In Visual Studio Code, eslint is enabled by default so any issues will be highlighted in your code. If this is not the case, enable the following configuration:

```diff
+ "eslint.enable": true
```

To fix automatically all fixable issues on save, enable this configuration:

```diff
+ "eslint.autoFixOnSave": true
```

___

## **Husky**: ESlint Pre-Commit Git Hook

Now, if there are some problems with the code, we know how to check them.

However, we are sometimes too busy to fix it or we just miss it. In order to force people to fix the code before commit it, we can use Husky. We need Husky to run a command before git commit runs. In this case, we use `Husky` to run ESLint.

**If a problem is found, Husky will stop the process and commit will fail**. On the other hand, if no problem is found, git commit will run as usual.

1. To install Husky we just need to type:

  ```sh
  npm i -D husky
  ```

2. After installing, type this code in `package.json` to configure Husky:

  ```diff
  {
    ...
    “scripts”: {
      ...
  +     “pretest”: “./node_modules/.bin/eslint --ignore-path .gitignore . --fix”
      ...
      },

    ...

  +   “husky”: {
  +     “hooks”: {
  +       “pre-commit”: “npm run pretest”
  +     }
  +   }
  }
  ```

  > The `--fix` option was added to the command to fix small problems like indentation or semicolon, but we need to add the files again.

**Note**: The pretest command checks all files, not just staged files.

___
