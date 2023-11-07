package pl.larp.larpex.pfsi.payment.domain.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum PaymentMethod {
  BLIK("https://blik.com/en"),
  TRANSFER("https://transfer.com/en");

  private final String redirectionUrlBase;
}
