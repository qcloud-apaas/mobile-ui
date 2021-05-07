import React from 'react';
import { MuiField } from '../../field';
import { createBEM } from '../../../pant-react/es/utils/bem';
import { NavBar } from '../../demos/scripts/components/nav-bar';
import './index.scss';

const bem = createBEM('demo-field');

export class FieldRouteComponent extends React.PureComponent {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <NavBar title="Field" type="field" />
        <div className={bem()}>
          <section>
            <h2>Basic Usage</h2>
            <MuiField<string> defaultValue="" name="a1" title="Label" placeholder="Text"></MuiField>
          </section>

          <section>
            <h2>Custom Type</h2>
            <MuiField<string> defaultValue="" name="b1" title="Text" placeholder="Text"></MuiField>
            <MuiField<string> type="tel" defaultValue="" name="b2" title="Phone" placeholder="Phone"></MuiField>
            <MuiField<string> type="digit" defaultValue="" name="b3" title="Digit" placeholder="Digit"></MuiField>
            <MuiField<string> type="number" defaultValue="" name="b4" title="Number" placeholder="Number"></MuiField>
            <MuiField<string>
              type="password"
              defaultValue=""
              name="b5"
              title="Password"
              placeholder="Password"
            ></MuiField>
          </section>

          <section>
            <h2>Disalbed</h2>
            <MuiField<string>
              defaultValue=""
              name="c1"
              title="Text"
              placeholder="Input Readonly"
              direction="column"
              readOnly
            ></MuiField>
            <MuiField<string>
              defaultValue=""
              name="c2"
              title="Text"
              placeholder="Input Disabled"
              direction="column"
              disabled
            ></MuiField>
          </section>

          <section>
            <h2>Show Icon</h2>
            <MuiField<string>
              defaultValue=""
              name="d1"
              title="Text"
              placeholder="Show Icon"
              rightIcon="warning-o"
            ></MuiField>
          </section>

          <section>
            <h2>Error Info</h2>
            <MuiField<string>
              defaultValue="123"
              name="e2"
              title="Phone"
              placeholder="Phone"
              errorMessage="Invalid phone"
              rightIcon="warning-o"
              required
            ></MuiField>
            <MuiField<string> defaultValue="" name="e1" title="Username" placeholder="Username" required></MuiField>
          </section>

          <section>
            <h2>Auto Resize</h2>
            <MuiField<string> type="textarea" defaultValue="" name="g1" placeholder="Message" autosize></MuiField>
          </section>

          <section>
            <h2>Show Word Limit</h2>
            <MuiField<string>
              type="textarea"
              defaultValue=""
              name="g1"
              title="Message"
              placeholder="Message"
              showWordLimit
              maxlength={50}
            ></MuiField>
          </section>

          <section>
            <h2>Input Align</h2>
            <MuiField<string>
              defaultValue=""
              name="g1"
              title="Text"
              placeholder="Input Align Right"
              inputAlign="right"
            ></MuiField>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
