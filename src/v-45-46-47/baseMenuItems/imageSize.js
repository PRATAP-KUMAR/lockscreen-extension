import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';

import updateOrnament from '../utils/updateOrnament.js';

const imageSize = (lockscreenExt, n) => {
    let items = [];

    let forTitle = new PopupMenu.PopupMenuItem('Background Image Size', {can_focus: false});

    let keys = ['cover', 'center', 'contain'];
    let dconfKey = `background-size-${n}`;

    keys.forEach(key => {
        const item = new PopupMenu.PopupMenuItem(key);
        items.push(item);

        item.connect('activate', () => {
            lockscreenExt._settings.set_string(dconfKey, key);
            updateOrnament(items, key);
        });
    });

    updateOrnament(items, lockscreenExt._settings.get_string(dconfKey));

    return [forTitle, ...items];
};

export default imageSize;
