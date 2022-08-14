function validateEmail(email)
{
  const LENGTH = email.length;

  if (LENGTH < 5)
  {
    return false;
  }

  let hasDot = false;
  let hasAt = false;
  let i = 0;

  while ((i < LENGTH) && (!hasDot || !hasAt))
  {
    if (email[i] === ".")
    {
      hasDot = true;
    }

    if (email[i] === "@")
    {
      hasAt = true;
    }

    i += 1;
  }

  return (hasDot && hasAt);
}

function validatePhone(phone)
{
  const LENGTH = phone.length;

  if (LENGTH !== 10)
  {
    return false;
  }

  for (let i = 0; i < LENGTH; i++)
  {
    let curr = phone.charCodeAt(i);
    if (curr < 48 || 57 < curr)
    {
      return false;
    }
  }

  return true;
}

function validatePassword(password)
{
  const LENGTH = password.length;

  return (4 <= LENGTH && LENGTH <= 60);
}

export { validateEmail, validatePhone, validatePassword };