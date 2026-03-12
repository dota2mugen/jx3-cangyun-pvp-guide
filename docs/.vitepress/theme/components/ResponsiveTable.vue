<template>
  <div class="responsive-table">
    <table>
      <caption v-if="caption">{{ caption }}</caption>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" :style="{ textAlign: column.align ?? 'left' }">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="row.id ?? rowIndex">
          <td
            v-for="column in columns"
            :key="column.key"
            :data-label="column.label"
            :style="{ textAlign: column.align ?? 'left' }"
          >
            <span v-if="!column.html">{{ row[column.key] }}</span>
            <span v-else v-html="row[column.key]"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  caption: { type: String, default: '' },
  columns: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] }
})
</script>

<style scoped>
.responsive-table {
  position: relative;
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid var(--sect-frame-color);
  border-radius: 20px;
  background:
    var(--sect-panel-tint),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)),
    var(--color-bg-card);
  box-shadow: var(--shadow-md);
}

.responsive-table::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--sect-ornament),
    var(--sect-plate);
  opacity: 0.22;
  pointer-events: none;
}

table {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
}

caption {
  padding: 16px 18px 0;
  text-align: left;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

th,
td {
  padding: 14px 18px;
  border-bottom: 1px solid rgba(100, 83, 53, 0.14);
  vertical-align: top;
}

thead th {
  color: var(--color-text-muted);
  font-weight: 600;
  background: rgba(255, 250, 242, 0.36);
}

tbody tr:last-child td {
  border-bottom: 0;
}

td {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .responsive-table {
    border-radius: 16px;
  }

  th,
  td {
    padding: 12px 14px;
  }
}
</style>
