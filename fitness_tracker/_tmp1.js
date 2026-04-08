async function __test() {
(function(){

// ══════════════════════════════════════════════
// SUPABASE
// ══════════════════════════════════════════════
const { createClient } = supabase;
const sb = createClient(
  'https://wkqlfxdukvekjgluxbaq.supabase.co',
  'sb_publishable_lZtn9T2ryYWNemQVXl0KvQ_qO9uYg7I'
);

let currentUser = null;
let currentProfile = null;
}