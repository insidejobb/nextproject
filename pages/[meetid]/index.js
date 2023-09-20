// pages/meetups/[meetid].js

import MeetupDetail from "@/components/meetups/MeetupDeatils";

function MeetupDetails({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetid: 'm1', // Use "meetid" here
        },
      },
      {
        params: {
          meetid: 'm2', // Use "meetid" here
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetid = context.params.meetid; // Use "meetid" here

  // Replace this with your actual data fetching logic
  const meetupData = {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    id: meetid, // Use "meetid" here
    title: 'First Meetup',
    address: 'Some Street 5, Some City',
    description: 'This is a first meetup',
  };

  return {
    props: {
      meetupData,
    },
  };
}

export default MeetupDetails;
