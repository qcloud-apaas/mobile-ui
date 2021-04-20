import React from 'react';
import { UIField } from '../../field';
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
            <UIField<string> defaultValue="" name="a1" title="Label" placeholder="Text"></UIField>
          </section>

          <section>
            <h2>Custom Type</h2>
            <UIField<string> defaultValue="" name="b1" title="Text" placeholder="Text"></UIField>
            <UIField<string> type="tel" defaultValue="" name="b2" title="Phone" placeholder="Phone"></UIField>
            <UIField<string> type="digit" defaultValue="" name="b3" title="Digit" placeholder="Digit"></UIField>
            <UIField<string> type="number" defaultValue="" name="b4" title="Number" placeholder="Number"></UIField>
            <UIField<string>
              type="password"
              defaultValue=""
              name="b5"
              title="Password"
              placeholder="Password"
            ></UIField>
          </section>

          <section>
            <h2>Disalbed</h2>
            <UIField<string> defaultValue="" name="c1" title="Text" placeholder="Input Readonly" readOnly></UIField>
            <UIField<string> defaultValue="" name="c2" title="Text" placeholder="Input Disabled" disabled></UIField>
          </section>

          <section>
            <h2>Show Icon</h2>
            <UIField<string>
              defaultValue=""
              name="d1"
              title="Text"
              placeholder="Show Icon"
              rightIcon="warning-o"
            ></UIField>
          </section>

          <section>
            <h2>Error Info</h2>
            <UIField<string>
              defaultValue="123"
              name="e2"
              title="Phone"
              placeholder="Phone"
              errorMessage="Invalid phone"
              required
            ></UIField>
            <UIField<string> defaultValue="" name="e1" title="Username" placeholder="Username" required></UIField>
          </section>

          <section>
            <h2>Auto Resize</h2>
            <UIField<string> type="textarea" defaultValue="" name="g1" placeholder="Message" autosize></UIField>
          </section>

          <section>
            <h2>Show Word Limit</h2>
            <UIField<string>
              type="textarea"
              defaultValue=""
              name="g1"
              title="Message"
              placeholder="Message"
              showWordLimit
              maxlength={50}
            ></UIField>
          </section>

          <section>
            <h2>Input Align</h2>
            <UIField<string>
              defaultValue=""
              name="g1"
              title="Text"
              placeholder="Input Align Right"
              inputAlign="right"
            ></UIField>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
