import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: 'ldjoifvefj',
      label: 'Is Michael Jordan the greatest Basketball player of all-time?',
      content: 'Yes'
    },
    {
      id: 'fejsfhieh',
      label: 'Can I use JavaScript on a project',
      content: 'You can use React on any project you want'
    },
    {
      id: 'r48fjw8fj',
      label: 'Can I use CSS on a project',
      content: 'You can use React on any project you want'
    },
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;