// Pakistani phone numbers to wa.me format. MIT. https://confirmkaro.appin60.com
export function normPhone(raw) {
  const s = String(raw || '').trim();
  const plus = s.startsWith('+');
  let d = s.replace(/\D/g, '');
  if (d.startsWith('0092')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('03')) d = '92' + d.slice(1);
  else if (d.length === 10 && d.startsWith('3')) d = '92' + d;
  if (d.length === 12 && d.startsWith('923')) return { ok: true, wa: d, pk: true };
  if (plus && d.length >= 10 && d.length <= 15) return { ok: true, wa: d, pk: false };
  return { ok: false, wa: d, why: d ? 'Not a valid mobile number' : 'No phone' };
}

export function waLink(wa, text) {
  return 'https://wa.me/' + wa + '?text=' + encodeURIComponent(text);
}

export function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (m, k) => (values[k] != null ? String(values[k]) : m));
}
