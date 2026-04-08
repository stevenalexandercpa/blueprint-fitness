
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
let userCompletions = {}; // { dateKey: { taskId: status } }
let otherUserCompletions = {}; // partner's completions
let currentTab = 'daily';
let clockInterval = null;
let fullRenderInterval = null;

// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════
const DAY_TYPES = { 0:'rest', 1:'ride', 2:'lift', 3:'ride', 4:'lift', 5:'lift', 6:'ride' };
