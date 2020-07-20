import { App, Stack } from '@aws-cdk/core'
import { Certificate, ValidationMethod } from '@aws-cdk/aws-certificatemanager'

const app = new App()
export const stack = new Stack(app, 'test-stack')
new Certificate(stack, 'Certificate', {
  domainName: 'app.example.com',
  validationMethod: ValidationMethod.DNS,
  validationDomains: {
    'app.example.com': 'example.com',
  }
})
