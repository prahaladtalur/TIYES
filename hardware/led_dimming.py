"""
Dim the onboard LED from 50% to 99% using software PWM, repeating.
The LED blinks off briefly between cycles to mark each new ramp.
"""

from machine import Pin
import time

led = Pin("LED", Pin.OUT)

PERIOD_US = 5000        # 200 Hz PWM period, flicker-free
STEP_TIME_MS = 50       # time spent at each brightness level
CYCLES = 5              # number of 50->99% ramps


def pwm_step(duty_percent, duration_ms):
    """Software PWM: hold this duty cycle for duration_ms."""
    on_us = int(PERIOD_US * duty_percent / 100)
    cycles = duration_ms * 1000 // PERIOD_US
    for _ in range(cycles):
        led.on()
        time.sleep_us(on_us)
        led.off()
        time.sleep_us(PERIOD_US - on_us)


for cycle in range(CYCLES):
    print("Cycle {}: ramping 50% -> 99%".format(cycle + 1))
    for duty in range(50, 100):
        pwm_step(duty, STEP_TIME_MS)

    # off pause marks the end of a cycle
    led.off()
    time.sleep(0.5)

led.on()
print("Done.")
