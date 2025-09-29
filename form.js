// ... existing code ...
export function initForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    message: form.querySelector("#message"),
  };

  const setError = (el, msg) => {
    el.closest(".field").querySelector(".error").textContent = msg || "";
  };

  const validate = () => {
    let ok = true;
    if (!fields.name.value.trim()) { setError(fields.name, "Please enter your name."); ok = false; } else setError(fields.name);
    const emailVal = fields.email.value.trim();
    if (!emailVal || !/^\S+@\S+\.\S+$/.test(emailVal)) { setError(fields.email, "Enter a valid email."); ok = false; } else setError(fields.email);
    if (!fields.message.value.trim()) { setError(fields.message, "Please enter a message."); ok = false; } else setError(fields.message);
    return ok;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    if (!validate()) return;

    // Simulate request
    form.querySelector("button[type=submit]").disabled = true;
    status.textContent = "Sending…";
    await new Promise(r => setTimeout(r, 900));
    status.textContent = "Message sent. We'll be in touch!";
    form.reset();
    form.querySelector("button[type=submit]").disabled = false;
  });
}
// ... existing code ...

