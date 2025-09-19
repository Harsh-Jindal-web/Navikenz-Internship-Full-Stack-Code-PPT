

package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Staff;
import net.javaguides.springboot.repository.StaffRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StaffController {

    @Autowired
    private StaffRepository staffRepository;

    // get all staff members
    @GetMapping("/staffs")
    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    // create staff member rest api
    @PostMapping("/staffs")
    public Staff createStaff(@RequestBody Staff staff) {
        return staffRepository.save(staff);
    }

    // get staff member by id rest api
    @GetMapping("/staffs/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable Long id) {
        Staff staff = staffRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Staff member does not exist with id: " + id));
        return ResponseEntity.ok(staff);
    }

    // update staff member rest api
    @PutMapping("/staffs/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable Long id, @RequestBody Staff staffDetails) {
        Staff staff = staffRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Staff member does not exist with id: " + id));

        staff.setFirstName(staffDetails.getFirstName());
        staff.setLastName(staffDetails.getLastName());
        staff.setEmailId(staffDetails.getEmailId());
        staff.setSalary(staffDetails.getSalary());
        staff.setMobilePhone(staffDetails.getMobilePhone());

        Staff updatedStaff = staffRepository.save(staff);
        return ResponseEntity.ok(updatedStaff);
    }

    // delete staff member rest api
    @DeleteMapping("/staffs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStaff(@PathVariable Long id) {
        Staff staff = staffRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Staff member does not exist with id: " + id));

        staffRepository.delete(staff);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

