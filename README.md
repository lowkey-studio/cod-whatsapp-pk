# cod-whatsapp-pk

Copy-ready WhatsApp messages for confirming **cash on delivery (COD) orders in Pakistan**, in Roman Urdu, Urdu and English, plus a tiny dependency-free JavaScript function that turns Pakistani phone numbers into the format `wa.me` links need.

Used by [ConfirmKaro](https://confirmkaro.appin60.com), a free browser tool that turns a Shopify / WooCommerce export or a Google Sheet into one "Send on WhatsApp" button per order. There is also a [WooCommerce plugin](https://confirmkaro.appin60.com/woocommerce).

## Phone numbers

```js
import { normPhone, waLink } from './cod-whatsapp-pk.js';

normPhone('0300 1234567');     // { ok: true, wa: '923001234567', pk: true }
normPhone('+92 321 7654321');  // { ok: true, wa: '923217654321', pk: true }
normPhone('3001234567');       // { ok: true, wa: '923001234567', pk: true }  (Excel dropped the 0)
normPhone('03451234');         // { ok: false, ... }  too short
waLink('923001234567', 'Assalam o Alaikum!'); // https://wa.me/923001234567?text=Assalam%20o%20Alaikum!
```

Note for WordPress developers: `esc_url()` strips encoded newlines (`%0A`) from URLs, so a prefilled WhatsApp message loses its line breaks. Build the URL with `rawurlencode()` and output it with `esc_attr()`.

## Templates

Placeholders: `{name} {store} {order} {items} {total} {address} {city}`. See [templates.json](templates.json).

### Roman Urdu: confirmation

```
Assalam o Alaikum {name}!
{store} se aap ka order {order} mil gaya hai:
{items}
Total: Rs {total} (cash on delivery)
Address: {address}, {city}

Order confirm karne ke liye *1* likh kar bhejein, cancel karne ke liye *2*.
Shukriya!
```

### Urdu: confirmation

```
السلام علیکم {name}!
{store} پر آپ کا آرڈر {order} موصول ہو گیا ہے:
{items}
کل رقم: {total} روپے (کیش آن ڈیلیوری)
پتہ: {address}، {city}

آرڈر کی تصدیق کے لیے *1* لکھ کر بھیجیں، منسوخ کرنے کے لیے *2*۔
شکریہ!
```

More (reminder for no reply, dispatch note, English) in [templates.json](templates.json) and on the [templates page](https://confirmkaro.appin60.com/whatsapp-order-confirmation-message-template).

## Licence

MIT. Contact: confirmkaro@appin60.com
