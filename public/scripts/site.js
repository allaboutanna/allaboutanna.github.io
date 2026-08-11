const body = document.body;
let activeTag = 'all';

function openDialog(dialog) {
  if (!dialog) return;
  dialog.showModal();
  body.classList.add('dialog-open');
}

function closeDialog(dialog) {
  if (!dialog) return;
  dialog.close();
  if (!document.querySelector('dialog[open]')) {
    body.classList.remove('dialog-open');
  }
}

document.querySelectorAll('[data-open-module]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.openModule;
    openDialog(document.querySelector(`[data-module-dialog="${key}"]`));
  });
});

document.querySelectorAll('[data-open-entry]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.openEntry;
    const currentDialog = button.closest('dialog[open]');
    if (currentDialog) closeDialog(currentDialog);
    openDialog(document.querySelector(`[data-entry-dialog="${CSS.escape(id)}"]`));
  });
});

document.querySelectorAll('[data-close-dialog]').forEach((button) => {
  button.addEventListener('click', () => closeDialog(button.closest('dialog')));
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const dialogs = [...document.querySelectorAll('dialog[open]')];
  closeDialog(dialogs.at(-1));
});

function applyTagFilter(tag) {
  activeTag = tag;

  document.querySelectorAll('[data-tag-filter]').forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.tagFilter === tag);
  });

  document.querySelectorAll('[data-module-panel]').forEach((panel) => {
    const entries = [...panel.querySelectorAll('.entry-preview')];
    let visibleCount = 0;

    entries.forEach((entry) => {
      const tags = (entry.dataset.tags || '').split('|').filter(Boolean);
      const visible = tag === 'all' || tags.includes(tag);
      entry.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    panel.classList.toggle('is-filtered-out', tag !== 'all' && visibleCount === 0);
  });
}

document.querySelectorAll('[data-tag-filter]').forEach((chip) => {
  chip.addEventListener('click', () => applyTagFilter(chip.dataset.tagFilter || 'all'));
});

applyTagFilter(activeTag);
