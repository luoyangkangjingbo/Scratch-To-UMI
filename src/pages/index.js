import styles from './index.css';

// export default function() {
//   return (
//     <div className={styles.normal}>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
//         <li>
//           <a href="https://umijs.org/guide/getting-started.html">
//             Getting Started
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

import GUI,{ AppStateHOC, setAppElement } from 'scratch-gui';
import {compose} from 'redux';
import ReactDOM from 'react-dom';

export default function() {

  const appTarget = document.createElement('div');
  appTarget.className = styles.app;
  document.body.appendChild(appTarget);
  setAppElement(appTarget);
  const WrappedGui = compose(
      AppStateHOC
  )(GUI);

  ReactDOM.render(
         <WrappedGui
            canEditTitle
            backpackVisible
            showComingSoon
            backpackHost={null}
            canSave={false}
            onClickLogo={() => {window.location = 'https://scratch.mit.edu'}}
        />,
      appTarget
  )

  return (
    null
  );
}
