import Link from "next/link";

export default function ScheduleItem(props: any) {
  const date = props.date;
  const time = props.time;
  const location = props.location;
  const event = props.event;
  const eventDescription = props.eventDescription;
  const sponser = props.sponser;
  const sponserLink = props.sponserLink;
  const link = props.link;
  return (
    <div className="table-row schedule-item">
      <div className="table-cell text-left schedule-item-date">{date}</div>
      <div className="table-cell">
        <div className="flex schedule-item-title justify-center">{event}</div>
        <div className="flex schedule-item-description justify-center">{eventDescription}</div>
        {sponser &&  <Link href={sponserLink} rel="noopener noreferrer" target="_blank" className="flex schedule-item-description justify-center">{`Sponsered by ${sponser}`}</Link>}
       

      </div>

      <div className="table-cell">
        <div className="flex schedule-item-title justify-end">{time}</div>
        <div className="flex schedule-item-description justify-end">{location}</div>
      </div>
    </div>
  );
}
