import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import COUNTRIES from 'Constants/country_name'

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: []
    }
    this.onTagsChange = this.onTagsChange.bind(this)
  }

  onTagsChange = (event, values) => {
    if (!values) return
    this.setState(
      {
        tags: values
      },
      () => {
        // This will output an array of objects
        // given by Autocompelte options property.
        console.log(this.state.tags)
        this.props.countryName(this.state.tags)
      }
    )
  }

  render() {
    return (
      <header>
        <nav>
          <ul className='navigation hr-ul-li'>
            <li className='logo'>COVID-19</li>
            <li>
              <Autocomplete
                onChange={this.onTagsChange}
                id='country-select'
                style={{ width: 300 }}
                options={COUNTRIES}
                autoHighlight
                getOptionLabel={option => option.label}
                renderOption={option => (
                  <span>
                    {countryToFlag(option.code)} | {option.label} ({option.code}
                    ) +{option.phone}
                  </span>
                )}
                renderInput={params => (
                  <TextField
                    {...params}
                    label='Choose a country'
                    variant='outlined'
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'disable' // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation
