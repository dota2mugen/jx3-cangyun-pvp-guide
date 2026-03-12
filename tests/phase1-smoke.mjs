import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

import config from '../docs/.vitepress/config.mjs'

const failures = []

function check(name, fn) {
  try {
    fn()
    process.stdout.write(`PASS ${name}\n`)
  } catch (error) {
    failures.push({ name, error })
    process.stdout.write(`FAIL ${name}\n`)
  }
}

check('phase 1 navigation does not expose unfinished mechanics page', () => {
  const navTexts = (config.themeConfig?.nav ?? []).map((item) => item.text)

  assert.ok(navTexts.includes('门派选择'))
  assert.ok(!navTexts.includes('通用机制'))
  assert.notEqual(config.ignoreDeadLinks, true)
})

check('site manifest exists for homepage sect cards', () => {
  assert.ok(existsSync('data/site-sections.json'))
})

check('homepage uses shared hero and sect navigation components', () => {
  const page = readFileSync('docs/index.md', 'utf8')

  assert.match(page, /SiteHero/)
  assert.match(page, /SectCardGrid/)
})

check('cangyun landing page uses shared hero and quick link components', () => {
  const page = readFileSync('docs/cangyun/index.md', 'utf8')

  assert.match(page, /PageHero/)
  assert.match(page, /QuickNavCards/)
})

check('skills and equipment pages use ResponsiveTable component instead of markdown table hacks', () => {
  const skillsPage = readFileSync('docs/cangyun/skills.md', 'utf8')
  const equipmentPage = readFileSync('docs/cangyun/equipment.md', 'utf8')

  assert.match(skillsPage, /ResponsiveTable/)
  assert.doesNotMatch(skillsPage, /\|\s*<template/)
  assert.match(equipmentPage, /ResponsiveTable/)
  assert.doesNotMatch(equipmentPage, /\|\s*<template/)
})

check('theme variables define paper base and cangyun-specific graphic semantics', () => {
  const varsCss = readFileSync('docs/.vitepress/theme/styles/vars.css', 'utf8')

  assert.match(varsCss, /--paper-fiber-strength/)
  assert.match(varsCss, /--paper-wash-opacity/)
  assert.match(varsCss, /--sect-frame-color/)
  assert.match(varsCss, /--sect-shield-rim/)
  assert.match(varsCss, /--sect-blade-streak/)
})

check('shared components use sect graphic tokens instead of generic gold-only decoration', () => {
  const pageHero = readFileSync('docs/.vitepress/theme/components/PageHero.vue', 'utf8')
  const quickNav = readFileSync('docs/.vitepress/theme/components/QuickNavCards.vue', 'utf8')
  const noticePanel = readFileSync('docs/.vitepress/theme/components/NoticePanel.vue', 'utf8')
  const mechanismTable = readFileSync('docs/.vitepress/theme/components/MechanismTable.vue', 'utf8')

  assert.match(pageHero, /sect-ornament|sect-plate|sect-shield|sect-blade/)
  assert.match(quickNav, /sect-ornament|sect-plate|sect-frame-color/)
  assert.match(noticePanel, /sect-ornament|sect-frame-color/)
  assert.match(mechanismTable, /sect-ornament|sect-frame-color/)
})

check('global theme switches to paper-base presentation and cangyun homepage keeps shared entry cards', () => {
  const customCss = readFileSync('docs/.vitepress/theme/styles/custom.css', 'utf8')
  const cangyunIndex = readFileSync('docs/cangyun/index.md', 'utf8')

  assert.match(customCss, /repeating-linear-gradient/)
  assert.match(customCss, /--paper-fiber-strength|paper-base/)
  assert.match(cangyunIndex, /QuickNavCards/)
})

check('cangyun landing page stays a navigation hub instead of duplicating detailed content pages', () => {
  const page = readFileSync('docs/cangyun/index.md', 'utf8')

  assert.match(page, /sidebar:\s*false/)
  assert.doesNotMatch(page, /MechanismTable/)
  assert.doesNotMatch(page, /ResponsiveTable/)
})

check('custom theme does not override VitePress sidebar layout containers in a way that causes overlap', () => {
  const customCss = readFileSync('docs/.vitepress/theme/styles/custom.css', 'utf8')

  assert.doesNotMatch(customCss, /\.VPContent\.has-sidebar/)
  assert.doesNotMatch(customCss, /\.VPDoc\.has-aside\s+\.content-container/)
  assert.doesNotMatch(customCss, /\.VPNavBar\.has-sidebar\s+\.content-body/)
})

check('equipment guide preserves old build-reference content from legacy equipment page', () => {
  const equipmentPage = readFileSync('docs/cangyun/equipment.md', 'utf8')
  const equipmentData = readFileSync('data/cangyun/equipment.json', 'utf8')

  assert.match(equipmentPage, /EquipmentReferenceCards|equipment-reference-grid/)
  assert.match(equipmentData, /30破45会/)
  assert.match(equipmentData, /34会40破/)
  assert.match(equipmentData, /会心\s*\+\s*会效\s*\+\s*攻击|会心 \+ 会效 \+ 攻击/)
  assert.match(equipmentData, /会心\s*\+\s*破防\s*\+\s*攻击|会心 \+ 破防 \+ 攻击/)
})

check('equipment guide exposes full thumbnails, in-page image preview, and updated top copy', () => {
  const equipmentPage = readFileSync('docs/cangyun/equipment.md', 'utf8')
  const equipmentCards = readFileSync('docs/.vitepress/theme/components/EquipmentReferenceCards.vue', 'utf8')

  assert.match(equipmentCards, /object-fit:\s*contain/)
  assert.doesNotMatch(equipmentCards, /object-fit:\s*cover/)
  assert.match(equipmentCards, /role="dialog"/)
  assert.match(equipmentCards, /@click\.self="closePreview"/)
  assert.match(equipmentCards, /previewImage|previewState|activePreview/)
  assert.match(equipmentPage, /无界端苍云配装先看你的实战目标/)
  assert.match(equipmentPage, /会心决定你抓住窗口时能不能把战狂伤害抬到上限/)
})

check('build detail page supports switching between adjacent builds and slider keeps follow-up combos', () => {
  const buildDetailPage = readFileSync('docs/cangyun/build-detail.md', 'utf8')
  const buildSlider = readFileSync('docs/.vitepress/theme/components/BuildSlider.vue', 'utf8')
  const buildSwitchNav = readFileSync('docs/.vitepress/theme/components/BuildSwitchNav.vue', 'utf8')
  const buildsData = readFileSync('data/cangyun/builds.json', 'utf8')

  assert.match(buildDetailPage, /buildOrder|prevBuild|nextBuild/)
  assert.match(buildDetailPage, /BuildSwitchNav/)
  assert.match(buildSwitchNav, /上一流派|下一流派|build-switch-nav/)
  assert.match(buildSlider, /followUp/)
  assert.match(buildSlider, /combo-step|comboPulse|particleFlow|animate-play/)
  assert.match(buildsData, /followUp/)
})

if (failures.length > 0) {
  process.stdout.write('\n')
  for (const failure of failures) {
    process.stdout.write(`${failure.name}: ${failure.error.message}\n`)
  }
  process.exitCode = 1
}
