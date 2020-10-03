'use strict'

import generateCatalog from './generateCatalog.js'
import generateFooter from './generateFooter.js'
import generateGoodsPage from './generateGoodsPage.js'
import generateHeader from './generateHeader.js'
import generateItemPage from './generateItemPage.js'
import { loadData } from './loadData.js'
import './storage.js'

generateHeader()
generateFooter()
generateCatalog()
generateGoodsPage()
generateItemPage()
loadData()
