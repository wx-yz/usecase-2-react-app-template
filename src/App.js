import React, {useEffect} from 'react';
import './App.css';
import './App.scss'
import { Button, Container, Table } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce,  } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'rsuite';

function App() {
  var [activePage, setActivePage] = React.useState(1);
  activePage = 3;
  useEffect(() => {
    document.title = "My Activity";
  }, []);
  return (
    <>
      <Container className="mt-5">
       <Table>
          <tr>
            <td><PersonCircle color='royalblue' size={52}/> <span className="h4">John Doe</span> johndoe@wso2.com</td>
            <td colSpan={2} className="text-end"><Button variant="info">Logout</Button></td>
          </tr>
          <tr>
            {/* My Accounts*/}
            <td className="align-top">
              <span><FontAwesomeIcon icon={faSalesforce} size="3x" color="lightblue" className="align-middle"/> <span>My Accounts</span></span>Total ARR: $1,000,000<br/>
              <Table className="small">
                <thead>
                  <tr>
                    <th>Account Name</th>
                    <th>Account Owner</th>
                    <th>ARR</th>
                  </tr>
                  <tr>
                    <td>ATI Inc.</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Brightline</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Adobe Inc.</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Equinx</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>PSI Online</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                </thead>
              </Table>
              <Pagination prev="Previous" next="Next" total="50" limit={10} activePage={activePage} onChangePage={setActivePage} />
            </td>

            {/* My Prospects */}
            <td className="align-top">
            <span><FontAwesomeIcon icon={faSalesforce} size="3x" color="lightblue" className="align-middle"/> <span>My Prospects</span></span>
Total ARR: $1,000,000<br/>
                <Table className="small">
                <thead>
                  <tr>
                    <th>Account Name</th>
                    <th>Account Owner</th>
                    <th>ARR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ATI Inc.</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Brightline</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Adobe Inc.</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>Equinx</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                  <tr>
                    <td>PSI Online</td>
                    <td>John Doe</td>
                    <td>$100,000</td>
                  </tr>
                </tbody>
              </Table>
              <Pagination prev="Previous" next="Next" total="50" limit={10} activePage={3} onChangePage={setActivePage}/>
            </td>

            {/* Upcoming Meetings */}
            <td width="350px" className="align-top">
            <span><FontAwesomeIcon icon={faCalendar} size="3x" color="teal" className="align-middle"/> <span>Upcoming events</span></span>
              <Table className="mt-3">
                <tr><h4>Tuesday 14 February</h4>
7-30-8am - [Internal] CCG marketing prep call<br />
8-9.30am - Choreo APIM SA enablement<br />
8:30-9am - FIS Handover session<br />
9-9:30am - FIS CApps<br />
                </tr>
                <tr><h4>Wednesday 15 February</h4>
7-30-8am - [Internal] CCG marketing prep call<br />
8-9.30am - Choreo APIM SA enablement<br />
8:30-9am - FIS Handover session<br />
9-9:30am - FIS CApps<br />
                </tr>
                <tr><h4>Thursday 16 February</h4>
7-30-8am - [Internal] CCG marketing prep call<br />
8-9.30am - Choreo APIM SA enablement<br />
8:30-9am - FIS Handover session<br />
9-9:30am - FIS CApps<br />
                </tr>
              </Table>
            </td>
          </tr>
       </Table>
      </Container>
    </>
  );
}

export default App;
