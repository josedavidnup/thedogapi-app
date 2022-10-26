export function validator(input) {
  let errors = {};
  // ------------------------------------------------------name require
  if (!input.name) {
    errors.name = 'Name is required';
    // ----------------------------------------------------name just letters
  } else if (!/^[A-Za-z\s]*$/.test(input.name)) {
    errors.name = 'Name must contain just letters';
  }

  if (!input.min_height || !input.max_height) {
    errors.min_height = 'Min height and Max height are required';
    errors.max_height = 'Min height and Max height are required';
  } else if (Number(input.max_height) < Number(input.min_height)) {
    errors.max_height = 'Max Height must be greater than Min Height.';
  }

  if (!input.min_weight || !input.max_weight) {
    errors.min_weight = 'Min Weight and Max Weight are required';
    errors.max_weight = 'Min Weight and Max Weight are required';
  } else if (Number(input.max_weight) < Number(input.min_weight)) {
    errors.max_weight = 'Max Weight must be greater than Min Weight.';
  }

  if (Number(input.min_life_span) > Number(input.max_life_span)) {
    errors.min_life_span = 'Min life span must be smaller than Max life span.';
    errors.max_life_span = 'Max life span must be greater than Min life span.';
  }

  if (!input?.temperaments.length) {
    errors.temperaments = 'You should select at least 1 Temperament';
  }

  //   if (input?.temperaments.filter((e) => e === input?.temperaments)) {
  //     errors.temperaments = 'Dont repeat';
  //   }
  return errors;
}
