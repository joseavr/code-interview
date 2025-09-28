import { ping, getDataPromoise, processFilePromise, processFile, readFiles } from "../solutions/index.js";

import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

describe('1. ping', () => {
  it('1.1. ping midu.dev', (_, done) => {
    ping('midu.dev', (err, info) => {
      ifError(err)
      equal(info.ip, 'midu.dev')
      done()
    })
  })
})

describe('2. getDataPromoise', () => {
  it('2.1. getDataPromoise', async () => {
    const { data } = await getDataPromoise({ time: 1 })
    equal(data, 'datos importantes')
  })
})

describe('3. processFilePromise', () => {
  afterEach(() => {
    try {
      unlinkSync('output.txt')
    } catch {}
  })

  it('3.1. processFile', (t, done) => {
    writeFileSync('input.txt', 'gogogo')
    processFile((err) => {
      ifError(err)
      readFile('output.txt', 'utf8')
        .then((contenido) => {
          equal(contenido, 'GOGOGO')
          done()
        })
    })
  })

  // it('3.1. processFilePromise', async () => {
  //   writeFileSync('input.txt', 'hola')
  //   await processFilePromise()
  //   const contenido = await readFile('output.txt', 'utf8')
  //   equal(contenido, 'HOLA')
  // })
})

describe('4. readFiles', () => {
  // it('4.1. readFiles', () => {
  //   const mensaje = readFiles()
  //   equal(mensaje, 'hola qué tal')
  // })

  it('4.1. readFiles', async () => {
    const mensaje = await readFiles()
    equal(mensaje, 'hola qué tal')
  })
})