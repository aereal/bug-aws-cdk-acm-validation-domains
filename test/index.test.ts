import { stack } from '../src'
import { haveResource, expect as cdkExpect } from '@aws-cdk/assert'

describe('App', () => {
  test('ok', () => {
    cdkExpect(stack).to(haveResource('AWS::CertificateManager::Certificate', {
      DomainName: 'app.example.com',
      ValidationMethod: 'DNS',
      DomainValidationOptions: [
        {
          DomainName: 'app.example.com',
          ValidationDomain: 'example.com',
        },
      ],
    }))
  })
})
