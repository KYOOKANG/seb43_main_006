package com.codestates.julsinsa.order.controller;

import com.codestates.julsinsa.order.dto.OrderPostDto;
import com.codestates.julsinsa.order.entity.Order;
import com.codestates.julsinsa.order.mapper.OrderMapper;
import com.codestates.julsinsa.order.service.OrderService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@Validated
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;
    private final OrderMapper mapper;

    public ResponseEntity postOrder(@RequestBody OrderPostDto orderPostDto) {
        Order order = orderService.createOrder(mapper.orderPostDtoToOrder(orderPostDto));

        return new ResponseEntity<>(mapper.orderToOrderResponseDto(order), HttpStatus.CREATED);
    }

    @PatchMapping("/{orders-id}/cancel")
    public ResponseEntity patchOrder(@PathVariable("orders-id") @Positive Long ordersId)
    {
    orderService.cancelOrder(ordersId);

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
