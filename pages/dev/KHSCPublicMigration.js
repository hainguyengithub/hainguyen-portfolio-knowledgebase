// @see pages/_app.js
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import helloWorldStyles from './KHSCPublicMigration.module.css';

// http://localhost:3000/dev/KHSCPublicMigration
export default function () {
  const [command, setCommand] = useState('');
  const [migration, setMigration] = useState('');
  const [showAlert, setShowAlert] = useState(false);
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
  return (
    <div id={helloWorldStyles.root}>
      <h1>Command Line Interface</h1>
      <Alert variant="primary" show={showAlert} onClose={() => { setShowAlert(false) }} dismissible>Command copied to clipboard.</Alert>
      <div id={helloWorldStyles.appMigration} className='app-container'>
        <div className={helloWorldStyles.container}>
          <div>Commands</div>
          <div>
            <ul className={helloWorldStyles.list} >
              {commands.map(each => <li onClick={() => { setCommand(each) }}>
                <input
                  id={each}
                  value={each}
                  type="radio"
                  name='migrate-command'
                // Without `checked`, it still works.
                // Warning: You provided a `checked` prop to a form field without an `onChange` handler.
                // checked={each === command}
                />
                <label className={helloWorldStyles.label} htmlFor={each}>
                  {each}
                </label>
              </li>)}
            </ul>
          </div>
        </div>
        <div className={helloWorldStyles.container}>
          <div>Migrations</div>
          <div>
            <ul className={helloWorldStyles.list}>
              {migrations.map(each => <li onClick={() => { setMigration(each) }}>
                <input
                  id={each}
                  value={each}
                  type="radio"
                  name='migrate-migration'
                />
                <label className={helloWorldStyles.label} htmlFor={each}>
                  {each}
                </label>
              </li>)}
            </ul>
          </div>
        </div>
        <div className={helloWorldStyles.container}>
          <Button variant='primary' onClick={() => { navigator.clipboard.writeText(`ddev drush migrate:${command} ${migration}`); setShowAlert(true); }}>Done</Button>
        </div>
      </div>
      <code id="result">
        ddev drush migrate:<span className={helloWorldStyles.emphasis}>{command}</span> <span className={helloWorldStyles.emphasis}>{migration}</span>
      </code>
    </div>
  );
}
