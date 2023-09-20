import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://media.istockphoto.com/id/537458944/photo/japanese-countryside.jpg?s=612x612&w=0&k=20&c=s3kcEwasOooCpSKmAh11N4xnKlUpQ6yZY-WoKd8okrg=',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://media.istockphoto.com/id/537458944/photo/japanese-countryside.jpg?s=612x612&w=0&k=20&c=s3kcEwasOooCpSKmAh11N4xnKlUpQ6yZY-WoKd8okrg=',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;