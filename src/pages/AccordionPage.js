import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: 'ldjoifvefj',
      label: 'Is Michael Jordan the greatest basketball player of all-time?',
      content: "Maybe... some say it's LeBron James"
    },
    {
      id: 'fejsfhieh',
      label: 'Who is the greatest 3-point shooter of all-time?',
      content: 'Stephen Curry'
    },
    {
      id: 'r48fjw8fj',
      label: 'Who is the greatest passer in NBA history?',
      content: 'Magic Johnson'
    },
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;