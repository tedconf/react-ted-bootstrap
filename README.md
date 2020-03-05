# TED Bootstrap

A React-based design system for internal TED projects.

## Installation

```bash
yarn add @tedconf/react-ted-bootstrap
```

`react-ted-bootstrap` requires your project have the follow peer dependencies installed:
- `@emotion/core`
- `react`
- `react-dom`

## Components List

* [`Alert`](#alert)
* [`Button`](#button)
* [`Container`](#container)
* [`DataTable`](#datatable)
* [`Dropdown`](#dropdown)
* [`Gear`](#gear)
* [`Input`](#input)
* [`Navbar`](#navbar)
* [`NavFlaps`](#navflaps)
* [`NavToggle`](#navtoggle)
* [`Select`](#select)
* [`Spinner`](#spinner)
* [`TwistDown`](#twistdown)

### Alert

```
import { Alert } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Alert type="warning" onClose={onClose}>
    My Alert
  </Alert>
)
```

**[⬆️ back to top](#components-list)**

### Button

```
import { Button } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Button>
    My Button
  </Button>
)
```

**[⬆️ back to top](#components-list)**

### Container

Bootstrap's `.container` equivalent

```
import { Container } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Container>
    // your code here..
  </Container>
)
```

**[⬆️ back to top](#components-list)**

### DataTable

```
import { DataTable } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <DataTable headings={headings} rows={rows} onSort={sort} />
)
```

**[⬆️ back to top](#components-list)**

### Dropdown

```
import { Dropdown } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Dropdown options={options} onClick={click} />
)
```

**[⬆️ back to top](#components-list)**

### Gear

```
import { Gear } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Gear>
    <Gear.Item>
      <a href="https://ted.com">TED.com</a>
    </Gear.Item>
  </Gear>
)
```

**[⬆️ back to top](#components-list)**

### Input

```
import { Input } from '@tedconf/react-ted-bootstrap';

const MyComponent = () => (
  <Input
    type="text"
    placeholder="Text input"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
)
```

**[⬆️ back to top](#components-list)**
