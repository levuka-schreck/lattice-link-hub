export const eventFlow = [
  { title: 'Publish & queue', text: 'Applications publish audit events. A durable queue buffers delivery; local spooling covers queue outages.' },
  { title: 'Sign & validate', text: 'An enrolled writer signs the event. Both organizations check its schema, identity, and permitted scope.' },
  { title: 'Endorse & commit', text: 'Both organizations endorse. Ordered transactions are validated and committed to each ledger copy.' },
  { title: 'Witness & project', text: 'Committed events feed an independent witness and local query models. Delivery is acknowledged on commit.' },
];

export const intakeFlow = [
  { title: 'Receive & hash', text: 'Airlock receives the object and creates a SHA-256 content fingerprint to link its custody history.' },
  { title: 'Scan & classify', text: 'Checks identify malware and sensitive data, including personal, health, financial, and secret information.' },
  { title: 'Quarantine or contain', text: 'Detected malware is quarantined. Other objects enter the containment vault, linked by content identity.' },
  { title: 'Release & route', text: 'Policy-driven release and routing to destination storage are planned for Airlock phase 2.', planned: true },
];

export const verificationLayers = [
  { title: 'Dual ledgers', question: 'Do both custodians agree?', text: 'Live checks compare the same record on DataOrg and AuditOrg peers. Missing records or different digests are surfaced.', outcome: 'Detects disagreement between ledger copies.' },
  { title: 'Independent witness', question: 'Is the history anchored?', text: 'The QMDB witness records checkpoints outside the ledger hosts. Organization cosigners rebuild from their own peers before signing. Current checkpoints accept any two of three signatures: the witness and the two organization cosigners.', outcome: 'Provides independent inclusion and checkpoint evidence.' },
  { title: 'Verified read model', question: 'Does the query match the ledger?', text: 'SQL copies support local queries. On-demand checks compare rows against the ledger; Data Passport proofs are retrieved live, not from SQL.', outcome: 'Detects changes to the application’s query copy.' },
];

export const evidenceTiers = [
  { tier: 'T1', title: 'Passport integrity', needs: 'Data Passport + trusted issuer key', proves: 'The signed bundle is authentic and unchanged since issuance.', mode: 'Offline' },
  { tier: 'T2', title: 'Content match', needs: 'Your copy of the data object', proves: 'The object’s bytes match the content hash in the Data Passport.', mode: 'Offline' },
  { tier: 'T3', title: 'Ledger & witness', needs: 'Ledger access + trusted witness keys', proves: 'Transactions exist, carry both organizations’ endorsement, and are anchored.', mode: 'Connected' },
  { tier: 'T4', title: 'OSCAL integrity', needs: 'OSCAL export + its Data Passport', proves: 'The export matches its evidenced projection; changed fields are identified.', mode: 'Export verification' },
];

export const failureBehaviors = [
  { title: 'Queue or transient delivery failure', text: 'Events spool locally when the queue is unavailable. Transient submissions retry with backoff; acknowledgement follows ledger commit, not initial receipt.' },
  { title: 'Invalid or unauthorized event', text: 'Ledger rules reject the event. Invalid events move to a dead-letter queue rather than becoming committed evidence.' },
  { title: 'Witness unavailable or parties disagree', text: 'A witness outage does not stop ledger writes, but anchored Data Passports are withheld. Disagreement halts the witness or stops a cosigner until an operator resolves it.' },
  { title: 'Query copy altered or lost', text: 'Integrity checks flag divergence from the ledger. The affected row can be re-projected, or the query model rebuilt from committed blocks.' },
];