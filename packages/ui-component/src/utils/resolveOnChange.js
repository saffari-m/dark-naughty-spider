function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === "click") {
    var currentTarget = target.cloneNode(true);
    // click clear icon
    event = Object.create(e, {
      target: { value: currentTarget },
      currentTarget: { value: currentTarget },
    });
    currentTarget.value = "";
    onChange(event);
    return;
  }
  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: { value: target },
      currentTarget: { value: target },
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}

export default resolveOnChange;
