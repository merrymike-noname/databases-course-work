package org.merrymike.soft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.merrymike.soft.model.Sprint;

public interface SprintRepository extends JpaRepository<Sprint, Integer> {
}
