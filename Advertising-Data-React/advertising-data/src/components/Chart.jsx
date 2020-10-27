import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import _ from 'lodash'

// Chart Component
const Chart = ({ globalFilter, title }) => {
  const [date, setDate] = useState()
  const [clicks, setClicks] = useState()
  const [impressions, setImpressions] = useState()

  // Seting state for Clicks, Data and Impressions on globalFilter change
  useEffect(() => {
    setDate(_.map(_.uniqBy(globalFilter, 'Date'), 'Date'))
    setClicks(_.map(_.uniqBy(globalFilter, 'Clicks'), 'Clicks'))
    setImpressions(_.map(_.uniqBy(globalFilter, 'Impressions'), 'Impressions'))

  }, [globalFilter])

  // Props for Line chart component
  const data = {
    labels: date,
    datasets: [
      {
        label: 'Clicks',
        yAxisID: 'clicks',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#276495',
        borderColor: '#276495',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#276495',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#276495',
        pointHoverBorderColor: '#276495',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: clicks
      },
      {
        label: 'Impressions',
        yAxisID: 'impressions',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#74ADDA',
        borderColor: '#74ADDA',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#74ADDA',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#74ADDA',
        pointHoverBorderColor: '#74ADDA',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: impressions
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: title,
      fontSize: 18,
      fontColor: 'black',
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: "black",
        fontSize: 12,
      }
    },
    scales: {
      yAxes: [{
        id: 'clicks',
        type: 'linear',
        position: 'left',
        scaleLabel: {
          display: true,
          fontSize: 18,
          fontColor: 'black',
          labelString: 'Clicks'
        },
      }, {
        id: 'impressions',
        type: 'linear',
        position: 'right',
        scaleLabel: {
          fontSize: 18,
          fontColor: 'black',
          display: true,
          labelString: 'Impressions'
        },
      }]
    },
  }

  
  return (
    <StyledContainer>
      <Line data={data} options={options}></Line>
    </StyledContainer>
  )
}
// Styled Components
// Div that is wrapping chart component
const StyledContainer = styled.div`
    width: 100%;
    height: 650px;
    flex: 2;
    margin: 2rem;
    border: 1px solid whitesmoke;
    padding: 2rem;
    
    @media(max-width: 768px){
        width: 100%;
    }
`

export default Chart