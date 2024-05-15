# angular-builders:jest import error

To reproduce the error run

    npm install
    npx ng test

## Project setup

Create project

    npx -p @angular/cli@17 ng new --strict --style=scss --ssr=false angular-builder-jest-import-error
    cd angular-builder-jest-import-error
    npm remove karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter jasmine-core @types/jasmine
    npm install --save-dev jest @types/jest @angular-builders/jest

Update `angular.json`

```json
"test": {
    "builder": "@angular-builders/jest:run",
    "options": {
    "tsConfig": "tsconfig.spec.json"
    }
}
```

In `tsconfig.spec.json` replace `jasmine` in `types` with `jest`.

Add example that causes the error:

- `example.dependency.ts`
- `example.service.spec.ts`
- `example.service.ts`
