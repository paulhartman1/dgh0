/* eslint-disable react/no-unescaped-entities */
import ScheduleItem from '../schedule-item';
export default function Schedule() {
  return (
    <>
    <h2 className="text-3xl text-center title">Performance Schedule: Where I'll be</h2>
    <div className="table-auto border-spacing-3  border-collapse schedule">
      <div className="table-row-group">
        <ScheduleItem
          date="07/08/2023"
          time="4PM - 8PM"
          location="4th and Coffman Longmont"
          event="SUMMER ON THE STREETS"
          eventDescription="Third of a second Saturday series of four, I'll be painting and have coloring books and more!"
          link="Link"
          sponser="Firehouse Arts Center"
          sponserLink="https://firehouseart.org/"
        />
        <ScheduleItem
          date="07/09/2023"
          time="4PM - 8PM"
          location="Left Hand Brewing Longmont"
          event="LEFT HAND beer garden"
          eventDescription="Art festival"
          link="Link"
          sponser="Brick's of Longmont"
          sponserLink="https://www.bricksretail.com/"
        />

        <ScheduleItem
          date="07/16/2023"
          time="4PM - 8PM"
          location="Left Hand Brewing Longmont"
          event="LEFT HAND beer garden"
          eventDescription="Art festival"
          link="Link"
          sponser="Brick's of Longmont"
          sponserLink="https://www.bricksretail.com/"
        />

        <ScheduleItem
          date="07/08/2023"
          time="11AM - 4PM"
          location="4th and Kimbark Longmont"
          event="MIRACLE ON 4TH"
          eventDescription="Miracle on 4th Christmas in July art festival"
          link="Link"
          sponser=""
          sponserLink="https://www.bricksretail.com/"
        />

        <ScheduleItem
          date="08/13/2023"
          time="4PM - 8PM"
          location="Left Hand Brewing Longmont"
          event="LEFT HAND beer garden"
          eventDescription="Art festival"
          link="Link"
          sponser="Brick's of Longmont"
          sponserLink="https://www.bricksretail.com/"
        />
      </div>
    </div>
    </>
  );
}
