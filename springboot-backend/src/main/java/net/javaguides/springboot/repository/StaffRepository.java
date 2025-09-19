package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
}
