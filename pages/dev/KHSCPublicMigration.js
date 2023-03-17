// @see pages/_app.js where Bootstrap is imported as global styles.
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import styles from './KHSCPublicMigration.module.css';

// http://localhost:3000/dev/KHSCPublicMigration
export default function () {
  const [command, setCommand] = useState('');
  const [migration, setMigration] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [importLimit, setImportLimit] = useState(1);
  const commands = [
    'rollback',
    'reset',
    'import',
  ];
  const migrations = [
    'node_annual_report',
    'node_profile',
    'taxonomy_term_researcher_type',
  ];
  const buildFullCommand = () => {
    return command === 'import'
      ? `ddev drush migrate:${command} ${migration} --limit=${importLimit}`
      : `ddev drush migrate:${command} ${migration}`
  }
  return (
    <div id={styles.root}>
      <h1>Command Line Interface</h1>
      <Alert variant="primary" show={showAlert} onClose={() => { setShowAlert(false) }} dismissible>Command copied to clipboard.</Alert>
      <div id={styles.appMigration} className='app-container'>
        {/* Command column */}
        <div className={styles.container}>
          <div>Commands</div>
          <div>
            <ul className={styles.list} >
              {commands.map(each => <li key={`li-${each}`} onClick={() => { setCommand(each); }}>
                <input
                  id={each}
                  value={each}
                  type="radio"
                  name='migrate-command'
                // Without `checked`, it still works.
                // Warning: You provided a `checked` prop to a form field without an `onChange` handler.
                // checked={each === command}
                />
                <label className={styles.label} htmlFor={each}>
                  {each}
                </label>
              </li>)}
            </ul>
          </div>
        </div>
        {/* Option column */}
        {command === 'import' && <div className={`${styles.container} ${styles.thin}`}><Form.Control placeholder="Limit" value={importLimit} onChange={(evt) => { console.log(evt.target.value.length); setImportLimit(evt.target.value.length === 0 ? 1 : evt.target.value) }} aria-label="Limit for import command" aria-describedby="limit-for-import-command" /></div>}
        {/* Migration column */}
        <div className={styles.container}>
          <div>Migrations</div>
          <div>
            <ul className={styles.list}>
              {migrations.map(each => <li key={`li-${each}`} onClick={() => { setMigration(each) }}>
                <input
                  id={each}
                  value={each}
                  type="radio"
                  name='migrate-migration'
                />
                <label className={styles.label} htmlFor={each}>
                  {each}
                </label>
              </li>)}
            </ul>
          </div>
        </div>
        {/* Done button */}
        <div className={styles.container}>
          <Button variant='primary' disabled={command === '' || migration === ''} onClick={() => { navigator.clipboard.writeText(buildFullCommand()); setShowAlert(true); }}>Done</Button>
        </div>
      </div>
      {/* The fully-built command */}
      <code id={styles.result}>{buildFullCommand()}</code>
    </div>
  ); // end of return
}
