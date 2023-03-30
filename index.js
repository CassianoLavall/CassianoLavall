import {calculate} from "./calculate.js"
import {copyToClipeboard,clearBtn} from "./copyEClearBTNs.js"
import { keys,charKyeBtnFunction } from "./keyHendlers.js"
import { themeSwitcher } from "./ThemeSwitcher.js"

input.addEventListener('keydown', keys)
charKyeBtnFunction()

document.getElementById('equal').addEventListener('click',calculate) /// funçao de calcular
document.getElementById('clear').addEventListener('click',clearBtn)
document.getElementById('copyToClipeboard').addEventListener('click',copyToClipeboard)
themeSwitcher() /// trocar o tema


