import { describe, expect, it } from 'vitest'
import i18n, { t } from './i18n'

describe('i18n', () => {
  it('struct', () => {
    expect(i18n.default).toBe('en')
    expect(i18n.language).toBe('en')
    expect(i18n.locales).toEqual(['en', 'zh'])
    expect(i18n.translations).toBeInstanceOf(Object)
    expect(i18n.t).toBeInstanceOf(Function)
  })

  it('t', () => {
    expect(t('foo')).toBe('foo')
    i18n.translations = { foo: 'bar' }
    expect(t('foo')).toBe('bar')
  })

  it('t w/ params', () => {
    expect(t('hello {name}', { name: 'foo' })).toBe('hello foo')
    i18n.translations = { 'hello {name}': '你好 {name}' }
    expect(t('hello {name}', { name: '中国' })).toBe('你好 中国')
  })
})
