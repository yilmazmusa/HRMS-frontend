import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
//import { Icon, Menu, Table } from "semantic-ui-react";
import { Button, Card, Icon, Image } from 'semantic-ui-react'

export default function JobAdvertList() {

  const [jobAdverts, setjobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getall().then((result) => setjobAdverts(result.data.data));
  });

  return (
    <div>
      <Card.Group>
      {jobAdverts.map((jobAdvert)=>(
          <Card fluid color="violet">
          
          <Card.Content>
            <Image
              floated='right'
              size='small'
              src='../assets/logo.png'
            />
            <Card.Header style={{marginLeft:"9em"}}>{jobAdvert.employer.companyName}</Card.Header>
            <Card.Meta style={{marginLeft:"12em"}}><Icon name="map marker alternate"/>{jobAdvert.city.name}</Card.Meta>
            <Card.Description>{jobAdvert.description} <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
          
        </Card>
        ))};
    
    
    
  </Card.Group>
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>PublishedAt</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Salary-Min</Table.HeaderCell>
            <Table.HeaderCell>Salary-Max</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>City Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {jobAdverts.map((jobAdvert)=>(
            <Table.Row key={jobAdvert.id}>
             
            <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
            <Table.Cell>{jobAdvert.employer.website}</Table.Cell>
            <Table.Cell>{jobAdvert.jobPosition.jobPosition}</Table.Cell>
            <Table.Cell>{jobAdvert.publishedAt}</Table.Cell>
            <Table.Cell>{jobAdvert.deadline}</Table.Cell>
            <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
            <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
            <Table.Cell>{jobAdvert.salaryMax}</Table.Cell> 
            <Table.Cell>{jobAdvert.description}</Table.Cell>
            <Table.Cell>{jobAdvert.city.name}</Table.Cell>
          </Table.Row>
        ))}
          
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table> */}
    </div>
  );
}