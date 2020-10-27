import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import _ from 'lodash'

const Form = ({ allData, setGloabalFilter, setTitle }) => {
    // declaring a useState hooks for form
    const [datasource, setDatasource] = useState([])
    const [campaigns, setCampaigns] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [filterDatasource, setFilterDataSource] = useState([])
    const [filterCampaigns, setFilterCampaigns] = useState([])

    // Seting state for datasource,capaigns, globalFilter and title of chart
    useEffect(() => {
        // seting unique values for datasource select input
        setDatasource(_.map(_.uniqBy(allData, 'Datasource'), 'Datasource').map(el => {
            return { value: _.filter(allData, datasource => datasource.Datasource === el), label: el }
        }))
        // seting unique values for campaigns select input
        setCampaigns(_.map(_.uniqBy(allData, 'Campaign'), 'Campaign').map(el => {
            return { value: _.filter(allData, campaign => campaign.Campaign === el), label: el }
        }))
        //seting globalFilter to all data from localhost server
        setGloabalFilter(allData)
        // seting a title for chart
        setTitle('All Datasources and All Campaigns')
    }, [allData, setGloabalFilter, setTitle])

    // Handeling Button on submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if(filterCampaigns.length <= 0 && filterDatasource.length <= 0) {
            setGloabalFilter(allData)
            setTitle('All Datasources and All Campaigns')
            setButtonDisabled(true)
        }
        else if(filterCampaigns.length <= 0) {
            setGloabalFilter(_.filter(allData, el => _.includes(filterDatasource, el.Datasource)))
            setTitle(filterDatasource.toString() + ', all Campaigns')
            setButtonDisabled(true)
        }
        else if(filterDatasource.length <= 0) {
            setGloabalFilter(_.filter(allData, el => _.includes(filterCampaigns, el.Campaign)))
            setTitle('All Datasources and ' + filterCampaigns.toString())
            setButtonDisabled(true)
        }
        else{
            let filterAllData = _.filter(allData, el => _.includes(filterDatasource, el.Datasource))
            let filterCampaign = _.filter(filterAllData, el => _.includes(filterCampaigns, el.Campaign))
            setGloabalFilter(filterCampaign)
            setTitle(filterDatasource.toString() + ' and ' + filterCampaigns.toString())
            setButtonDisabled(true)
        }
    }
    // custom style props for Select Component
    const customStyles = {
        control: (base) => ({
            ...base,
            background: "#B9C6CE",
        }),
        dropdownIndicator: base => ({
            ...base,
            color: "black"
        }),
        multiValue: base => ({
            ...base,
            background: "#E7F4FD"
        }),
        clearIndicator : base => ({
            ...base,
            color: "black",
        })
    }

    // On select change set filterDataSource label for further filter
    const handleDataSource = e => {
        setFilterDataSource(_.map(e, 'label'))
    }
    // On select change setFilterCampaigns label for further filter
    const handleCampaigns = e => {
        setFilterCampaigns(_.map(e, 'label'))
        setButtonDisabled(false)
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h3>Filter dimension values</h3>
            <p>Datasource</p>
            <StlyedButton type="submit" disabled={buttonDisabled}>Apply</StlyedButton>
            <StyledSelect options={datasource} isMulti onChange={handleDataSource} styles={customStyles} />
            <p>Campaign</p>
            <StyledSelect options={campaigns} isMulti onChange={handleCampaigns} styles={customStyles} />
        </StyledForm>

    )
}
// Styled components
const StyledForm = styled.form`
    width: 40rem;
    margin: 2rem;
    border: 1px solid whitesmoke;
    background-color: #E7F4FD;
    padding: 2rem;
    color: #32373C;
    
    h3 {
        font-size: 3rem;
        font-weight: 400;
    }
    p {
        font-weight: bold;
        font-size: 1.6rem;
    }
    @media(max-width: 768px){
        height: 25em;
        h3 {
            font-size: 2em;
        }
        p {
            font-size: 1.2em;
        }
    }

`
const StyledSelect = styled(Select)`
    font-size: 1.5rem;
    width: 70%;
`
const StlyedButton = styled.button`
    float: right;
    text-align: center;
    padding: 0.8rem 1rem;
    margin-left: auto 0.5rem;

    @media(max-width: 768px){
        padding: 0.1em;
    }
`
export default Form