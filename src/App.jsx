import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Email from './components/pages/Email';
import EmailSummary from './components/emailbox/EmailSummary';
import ChooseFolder from './components/emailbox/ChooseFolder';
import EmailDetail from './components/emailbox/EmailDetail';
import messages from './components/data/messages.json';
import ChooseEmail from './components/emailbox/ChooseEmail';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/main' element={<Header />}>
        <Route path='/main/home' element={<Home></Home>}></Route>
        <Route path='/main/contact' element={<Contact></Contact>}></Route>
        <Route path='/main/email' element={<Email></Email>}>
          <Route path='/main/email' element={<ChooseFolder />}></Route>
          {/* Inbox */}
          <Route path='/main/email/inbox' element={<EmailSummary messages={messages} type='inbox' />}>
            <Route path='/main/email/inbox' element={<ChooseEmail />} />
            <Route path='/main/email/inbox/:id' element={<EmailDetail />} />
          </Route>
          {/* Sent */}
          <Route path='/main/email/sent' element={<EmailSummary messages={messages} type='sent' />}>
            <Route path='/main/email/sent' element={<ChooseEmail />} />
            <Route path='/main/email/sent/:id' element={<EmailDetail />} />
          </Route>
          {/* Reminder */}
          <Route path='/main/email/reminder' element={<EmailSummary messages={messages} type='reminder' />}>
            <Route path='/main/email/reminder' element={<ChooseEmail />}/>
            <Route path='/main/email/reminder/:id' element={<EmailDetail />} />
          </Route>
          {/* Spam */}
          <Route path='/main/email/spam' element={<EmailSummary messages={messages} type='spam' />}>
            <Route path='/main/email/spam' element={<ChooseEmail />}/>
            <Route path='/main/email/spam/:id' element={<EmailDetail />} />
          </Route>
          {/* Favorite */}
          <Route path='/main/email/favorite' element={<EmailSummary messages={messages} type='favorite' />}>
            <Route path='/main/email/favorite' element={<ChooseEmail />}/>
            <Route path='/main/email/favorite/:id' element={<EmailDetail />} />
          </Route>
          {/* Junks */}
          <Route path='/main/email/junks' element={<EmailSummary messages={messages} type='junks' />}>
            <Route path='/main/email/junks' element={<ChooseEmail />}/>
            <Route path='/main/email/junks/:id' element={<EmailDetail />} />
          </Route>
          {/* Drafts */}
          <Route path='/main/email/drafts' element={<EmailSummary messages={messages} type='drafts' />}>
            <Route path='/main/email/drafts' element={<ChooseEmail />}/>
            <Route path='/main/email/drafts/:id' element={<EmailDetail />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
