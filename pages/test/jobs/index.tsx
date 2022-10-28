import { Container, LoadingOverlay, Select } from '@mantine/core'
import { useEffect, useState } from 'react'
import { CardMantine } from '../../../components/Card/Card'
import { Jobs } from '../../../typing'
import { Head } from '../../../components/Header/Header'
import styled from 'styled-components'

const SelectContainer = styled.div`
  display: grid;
  gap: 0.318rem;
  margin: 1rem 0 0 0;
`

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [state, setState] = useState([])

  // hook to get jobs using payload
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://www.zippia.com/api/jobs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companySkills: true,
          dismissedListingHashes: [],
          fetchJobDesc: true,
          jobTitle: 'Business Analyst',
          locations: [],
          numJobs: 20,
          previousListingHashes: []
        })
      })
      const data = await response.json()
      setJobs(data.jobs)
      setState(data.jobs)
      setLoading(false)
    }
    getData()
  }, [])

  // function to active loader overlay
  const [loading, setLoading] = useState(true)

  // filter to get all companies
  const companiesNameFilter = jobs
    .map((job: Jobs) => job.companyName)
    .concat('All Companies')
  // create unique colection using Set method and sort array
  const companies = [...new Set(companiesNameFilter)].sort(
    (a: string, b: string) => a.localeCompare(b)
  )

  // function to filter jobs by company
  const filterByCompany = (value: string) => {
    const filteredJobs = jobs.filter((job: Jobs) => job.companyName == value)
    setState(filteredJobs)
    if (value == 'All Companies') {
      setState(jobs)
    }
  }

  // function to get all posted date
  const postedDateFilter = jobs
    .map((job: Jobs) => job.postedDate)
    .concat('All Dates')
  // create unique colection using Set method and sort array
  const postedDate = [...new Set(postedDateFilter)].sort(
    (a: string, b: string) => b.localeCompare(a)
  )

  // function to filter jobs by posted date
  const filterByPostedDate = (value: string) => {
    const filteredJobs = jobs.filter((job: Jobs) => job.postedDate == value)
    setState(filteredJobs)
    if (value == 'All Dates') {
      setState(jobs)
    }
  }

  return (
    <>
      <LoadingOverlay
        loaderProps={{ size: 'md', color: 'blue', variant: 'oval' }}
        overlayOpacity={0.3}
        visible={loading}
      />
      <Container size={'xl'}>
        <Head />
        <SelectContainer>
          <Select
            radius={'md'}
            placeholder="Select by company name"
            data={[...companies]}
            onChange={(data: string) => {
              filterByCompany(data)
            }}
          />
          <Select
            radius={'md'}
            placeholder="Select by posted date"
            data={[...postedDate]}
            onChange={(data: string) => {
              filterByPostedDate(data)
            }}
          />
        </SelectContainer>
        {state?.map((job: Jobs) => (
          <CardMantine
            key={job.jobId}
            jobTitle={job.jobTitle}
            companyName={job.companyName}
            snippet={job.snippets}
            posted={job.postedDate}
            src={job.companyLogo}
            alt={job.companyName}
            href={job.OBJurl}
            salary={job.estimatedSalary}
            level={job.jobLevels}
          />
        ))}
      </Container>
    </>
  )
}
