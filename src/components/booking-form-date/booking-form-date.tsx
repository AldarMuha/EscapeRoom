type BookingFormDateType = {
  time: string;
  isAvailable: boolean;
}

function BookingFormDate({ time, isAvailable }: BookingFormDateType): JSX.Element {
  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={time}
        name="date"
        required
        defaultValue={time}
        disabled={!isAvailable}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default BookingFormDate;
