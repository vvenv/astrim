import { i18n } from '@/middlewares/i18n'
import { sequence } from 'astro:middleware'

export const onRequest = sequence(i18n)
